import { state } from "../types/types";
import { EventBus } from "../core/EventBus";
import { set } from "../utils/helpers";

type StoreEvents = {
  "updated": [object],
}

class Store extends EventBus<StoreEvents> {
  private state: state = {};

  public EVENTS: Record<string, keyof StoreEvents> = {
    UPDATED: "updated",
  };

  public set(path: string, value: unknown) {
    set(this.getState(), path, value);

    this.emit(this.EVENTS.UPDATED, this.getState());
  };

  public getState() {
    return this.state;
  }
}

export default new Store(); 
