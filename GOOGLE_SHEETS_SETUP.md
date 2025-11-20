# Google Apps Script Setup for BuukClub Waitlist

## Overview
This document provides instructions to set up Google Apps Script to receive form submissions from the BuukClub website and save them to your Google Sheet.

## Step 1: Open Your Google Sheet
1. Go to: https://docs.google.com/spreadsheets/d/1ux0_2kdKaF_2NE7lw-CJymj4kOdUN9fsTA_nMhG75SM
2. Make sure you have edit access

## Step 2: Set Up Headers
In the first row of your sheet, add these column headers:
- A1: Timestamp
- B1: Name
- C1: Email
- D1: Favorite Genre
- E1: Books Per Year

## Step 3: Create Apps Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append new row with the data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.favoriteGenre || 'Not specified',
      data.booksPerYear || 'Not specified'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon) and name your project "BuukClub Waitlist"

## Step 4: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the deployment settings:
   - **Description**: BuukClub Waitlist API
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Important**: Copy the **Web app URL** that appears (it will look like: `https://script.google.com/macros/s/...../exec`)
6. Click **Done**

## Step 5: Configure Environment Variable
1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line (replace with your actual URL from Step 4):
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

## Step 6: Test the Integration
1. Restart your Next.js development server: `npm run dev`
2. Go to http://localhost:3000/join
3. Fill out the form and submit
4. Check your Google Sheet to see if the data appears

## Troubleshooting
- **Data not appearing**: Check the Apps Script execution logs (View → Executions)
- **CORS errors**: Make sure "Who has access" is set to "Anyone"
- **Permission errors**: You may need to authorize the script the first time it runs

## Security Notes
- The Web App URL is public but only accepts POST requests
- Consider adding additional validation in the Apps Script if needed
- The URL can be regenerated if compromised by creating a new deployment
