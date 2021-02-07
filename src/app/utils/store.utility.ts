import { User } from '../models/user.model';

export class StoreUtility {
  public static normalizeFormat(users: Entity[]) {
    return users.reduce((previousValue, currentValue) => {
      return { ...previousValue, ...{ [currentValue.id]: currentValue } };
    }, {});
  }
  public static removeKey(
    entities: { [id: number]: any },
    id
  ): { [p: number]: any } {
    const newObj: { [p: number]: any } = { ...entities };
    delete newObj[id];
    return newObj;
  }

  public static filterDuplicateIds(ids: number[]): number[] {
    return ids.filter((elem, index, self) => index === self.indexOf(elem));
  }
}

interface Entity {
  id: any;
}
