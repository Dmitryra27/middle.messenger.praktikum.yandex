import BaseAPI from "./BaseAPI";
import { ProfileData, PasswordData, User } from "../types/interfaces";


export class ProfileAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  public changeProfile(profileData: ProfileData) {
    return this.hhtp.put("/profile", {data: profileData});
  }

  public changeAvatar(avatarData: FormData) {
    return this.hhtp.put("/profile/avatar", {data: avatarData});
  }

  public changePassword(passwordData: PasswordData) {
    return this.hhtp.put("/password", {data: passwordData});
  }

  public searchByLogin(login: String): Promise<User[]> {
    return this.hhtp.post("/search", {data: {login}});
  }

  read = undefined;
  create = undefined;
  update = undefined;
  delete = undefined;
}
