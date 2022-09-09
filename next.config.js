module.exports = {
  reactStrictMode: true,
  env: {
    EMAILJS_CAREER_SERVICE_ID: 'career_service',
    EMAILJS_ENQUIRE_SERVICE_ID: 'enquire_service',
    EMAILJS_CAREER: 'template_career',
    EMAILJS_ENQUIRE: 'template_enquire',
    EMAILJS_USERID: 'user_dQdshqj4e4waa19x1hhHN',
    GA_TRACKING_ID: "G-XD6NJ64Y27"
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|jpeg)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}
