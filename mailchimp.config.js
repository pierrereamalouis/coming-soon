const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: 'a12b87b83c5c7fa03cfc56773b5670f3-us7',
  server: 'us7',
});

const listID = 'ece1b36346';

exports.mailchimpAddEmailToAudience = async (subscribingUser) => {
  try {
    const response = await mailchimp.lists.addListMember(listID, {
      email_address: subscribingUser.email,
      status: 'pending',
    });

    console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
  } catch (error) {
    console.log(error);
  }
};
