export class StoreUtility {
  public static removeKey(entities: { [id: number]: any }, id): { [p: number]: any } {
    const newObj: { [p: number]: any } = {...entities};
    delete newObj[id];
    return newObj;
  }
}

interface Entity {
  id: any;
}
