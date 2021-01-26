const { apiKey, listID, server } = require('./config');
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey,
  server,
});

exports.addEmailToAudience = async (subscribingEmail) => {
  const response = await mailchimp.lists.addListMember(listID, {
    email_address: subscribingEmail,
    status: 'subscribed',
  });

  return response;
};
