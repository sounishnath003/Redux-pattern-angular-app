import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user.model';

@Pipe({
  name: 'userFilter',
  pure: true
})
export class UserFilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    const updatedUserFilterList: User[] = users.filter((user: User) => {
      const fullName = (
        user.email
      ).toLocaleLowerCase();
      return fullName.indexOf(searchTerm.toLocaleLowerCase()) !== -1;
    });
    return updatedUserFilterList;
  }
}
