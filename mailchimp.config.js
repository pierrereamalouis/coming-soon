const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: '3f5e67ef3b10e6ae76502ab2403e94e9-us7',
  server: 'us7',
});

const listID = 'ece1b36346';

exports.addEmailToAudience = async (subscribingEmail) => {
  const response = await mailchimp.lists.addListMember(listID, {
    email_address: subscribingEmail,
    status: 'pending',
  });

  return response;
};
