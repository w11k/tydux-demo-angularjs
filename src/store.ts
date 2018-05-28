import {Mutator, Store} from '@w11k/tydux';

export class DemoState {

  entries: string[] = [];

}

export class DemoMutator extends Mutator<DemoState> {

  addEntry(entry: string) {
    this.state.entries = [
      ...this.state.entries,
      entry
    ];
  }

}

export class DemoStore extends Store<DemoMutator, DemoState> {

  constructor() {
    super("Demo", new DemoMutator(), new DemoState());
  }

  addEntry(entry: string) {
    this.mutate.addEntry(entry);
  }

}


