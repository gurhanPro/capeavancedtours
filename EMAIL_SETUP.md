# Email Setup for Cape Advanced Tours

## ✅ Current Setup (Ready for Production!)
The contact form is now configured with **Resend** email service and will automatically:
- **Send real emails** if `RESEND_API_KEY` is configured
- **Fall back to simulation mode** (console logs) if no API key is found

## 🚀 Quick Setup for Real Email Sending

### Step 1: Get Resend API Key
1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Go to API Keys section
3. Create a new API key
4. Copy the key (starts with `re_`)

### Step 2: Add API Key
Edit `.env.local` and uncomment/add your API key:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 3: Verify Your Domain (Production)
For production, you'll need to:
1. Add your domain to Resend (e.g., `capeadvancedtours.com`)
2. Update the `from` address in the code from `bookings@yourdomain.com` to `bookings@capeadvancedtours.com`

## 🧪 Testing Email Functionality

### Current Status:
- ✅ **Resend package installed**
- ✅ **Code ready for real email sending**
- ✅ **Comprehensive logging for debugging**
- ✅ **Graceful fallback to simulation mode**

### To Test:
1. **Without API key**: Form logs to console (current mode)
2. **With API key**: Form sends real emails to info@capeadvancedtours.com

### Debug Logs Show:
- 📧 Email content and recipient
- 🚀 Whether using real email or simulation
- ✅ Success/failure status
- 💥 Detailed error information if needed

## 📧 Current Form Configuration
- **To**: info@capeadvancedtours.com
- **From**: Cape Advanced Tours <bookings@yourdomain.com>
- **Reply-To**: Customer's email address
- **Subject**: "New Booking Enquiry - [Service]"

## 🔧 Form Fields
- Name (required)
- Email (required) 
- Phone (optional)
- Service (required dropdown)
- Preferred Date (optional)
- Message (optional)

**Ready to go live!** Just add your Resend API key! 🎉