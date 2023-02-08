class IntegerIDManager {
  constructor() {
    this.ids = new Set();
    this.nextId = 1;
  }

  fetch() {
    let id = this.nextId++;
    this.ids.add(id);

    return id;
  }

  set(id) {
    this.ids.add(id);
  }

  reset() {
    this.ids.clear();
  }
}

export default IntegerIDManager;
