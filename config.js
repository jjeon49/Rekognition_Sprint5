angular.module('config', [])
  .constant('config',
  {
    prod: {
      region: 'ap-northeast-1',
      upload_bucket_name: 'rekognition101-XXXXXX',
      identity_pool_id: 'ap-northeast-1:XXXXXX',
      face_collection: 'rekognition-demo-go',
      ddb_table: 'rekognition-demo-go'

    }
  }
  )
  ;

