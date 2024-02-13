export namespace ImageType {
  export enum ImageBucketType {
    UserProfile = 'user-profiles',
    UserProfileMultiples = 'user-profile-multiples',
    UserCertification = 'user-certifications',
    UserInquiry = 'user-inquiries',
    UserReport = 'user-reports',
    Lounge = 'lounges',
    LoungeMultiples = 'lounge-multiples',
    SimilarFaces = 'similar-faces',
    Parties = 'parties',
    UserCardProfiles = 'user-card-profiles',
  }

  export interface ImageModel {
    bucket: string;
    id: string;
    largeUrl: string;
    middleUrl: string;
    prefix: string;
    smallUrl: string;
    url: string;
  }

  // export interface IVideoModel {
  //     bucket: string,
  //     duration?: number,
  //     id: string,
  //     url: string,
  // }
}
