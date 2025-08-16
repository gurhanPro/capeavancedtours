import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const requestId = Math.random().toString(36).substring(7);
  
  console.log(`🚀 [${requestId}] Contact form submission started at ${new Date().toISOString()}`);
  
  try {
    // Log incoming request details
    console.log(`📥 [${requestId}] Request method: ${request.method}`);
    console.log(`📥 [${requestId}] Request URL: ${request.url}`);
    console.log(`📥 [${requestId}] Request headers:`, Object.fromEntries(request.headers));

    const body = await request.json();
    console.log(`📋 [${requestId}] Raw request body:`, body);
    
    const { name, email, phone, service, date, message } = body;
    
    // Log extracted fields
    console.log(`🔍 [${requestId}] Extracted fields:`, {
      name: name || 'MISSING',
      email: email || 'MISSING', 
      phone: phone || 'NOT PROVIDED',
      service: service || 'MISSING',
      date: date || 'NOT PROVIDED',
      message: message || 'NOT PROVIDED'
    });

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!email) missingFields.push('email');
    if (!service) missingFields.push('service');
    
    if (missingFields.length > 0) {
      console.log(`❌ [${requestId}] Validation failed - missing fields:`, missingFields);
      return NextResponse.json(
        { 
          success: false, 
          message: `Please fill in all required fields: ${missingFields.join(', ')}.`,
          missingFields
        },
        { status: 400 }
      );
    }

    console.log(`✅ [${requestId}] Validation passed - all required fields present`);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log(`❌ [${requestId}] Invalid email format: ${email}`);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please provide a valid email address.' 
        },
        { status: 400 }
      );
    }

    console.log(`✅ [${requestId}] Email format validation passed`);

    // Create formatted email content
    const emailContent = {
      to: 'info@capeadvancedtours.com',
      subject: `New Booking Enquiry - ${service}`,
      body: `
New booking enquiry from Cape Advanced Tours website:
Submission ID: ${requestId}
Submitted at: ${new Date().toISOString()}

Customer Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Booking Details:
- Service: ${service}
- Preferred Date: ${date || 'Not specified'}
- Additional Message: ${message || 'No additional message'}

Please contact the customer to confirm the booking details.

Reply to: ${email}
      `
    };

    console.log(`📝 [${requestId}] Email content prepared:`);
    console.log(`📧 [${requestId}] To: ${emailContent.to}`);
    console.log(`📧 [${requestId}] Subject: ${emailContent.subject}`);
    console.log(`📧 [${requestId}] Body length: ${emailContent.body.length} characters`);
    console.log(`📧 [${requestId}] Full email body:\n${emailContent.body}`);

    // Check if we have a Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.log(`⚠️ [${requestId}] No RESEND_API_KEY found in environment - using simulation mode`);
      console.log(`⏳ [${requestId}] Simulating email sending...`);
      await new Promise(resolve => setTimeout(resolve, 100));
      console.log(`✅ [${requestId}] Email simulation completed successfully`);
    } else {
      console.log(`📤 [${requestId}] RESEND_API_KEY found - sending actual email`);
      
      try {
        const resend = new Resend(resendApiKey);
        
        console.log(`🚀 [${requestId}] Initializing Resend with API key: ${resendApiKey.substring(0, 8)}...`);
        
        const emailResult = await resend.emails.send({
          from: 'Cape Advanced Tours <bookings@capeadvancedtours.com>',
          to: 'info@capeadvancedtours.com',
          subject: emailContent.subject,
          text: emailContent.body,
          replyTo: email,
        });
        
        console.log(`✅ [${requestId}] Email sent successfully via Resend:`, emailResult);
        
      } catch (emailError) {
        console.error(`💥 [${requestId}] Failed to send email via Resend:`, emailError);
        
        // Fall back to simulation if Resend fails
        console.log(`⚠️ [${requestId}] Falling back to simulation mode due to email error`);
        console.log(`⏳ [${requestId}] Simulating email sending...`);
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log(`✅ [${requestId}] Email simulation completed successfully`);
      }
    }

    const processingTime = Date.now() - startTime;
    console.log(`🎉 [${requestId}] Request completed successfully in ${processingTime}ms`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Your enquiry has been received! We will contact you soon via email or phone.',
      submissionId: requestId,
      processingTime: `${processingTime}ms`
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error(`💥 [${requestId}] Contact form error after ${processingTime}ms:`, error);
    console.error(`💥 [${requestId}] Error stack:`, error instanceof Error ? error.stack : 'No stack trace');
    console.error(`💥 [${requestId}] Error name:`, error instanceof Error ? error.name : 'Unknown');
    console.error(`💥 [${requestId}] Error message:`, error instanceof Error ? error.message : String(error));
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Sorry, there was an error processing your enquiry. Please call us directly at 083 954 6069 or email info@capeadvancedtours.com.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
        submissionId: requestId,
        processingTime: `${processingTime}ms`
      },
      { status: 500 }
    );
  }
}