module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dgfd4wb8d'),
          api_key: env('928747199988742'),
          api_secret: env('3V5Us7nJiTa3EUIeGpp5ePOzTOQ'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });