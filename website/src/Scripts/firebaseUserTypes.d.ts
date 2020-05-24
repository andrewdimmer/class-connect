export declare type UserType = "student" | "teacher";

export declare interface UserPublicProfile {
  userType: UserType;
  userId: string;
  displayName: string;
  email: string;
  photoUrl: string;
}

export declare interface UserProfile extends UserPublicProfile {}

export declare type UserProfileUpdateObject = {
  displayName?: string;
  email?: string;
  photoUrl?: string;
};
