import Component, { tracked } from "@glimmer/component";

export default class GlimmerDidUpdateHook extends Component {
  updated = false;

  @tracked
  foo: boolean = false;

  didInsertElement() {
    setTimeout(() => {
      this.foo = true;
    }, 2000);
  }


  didUpdate() {
    if (!this.updated) {  // to compensate for infinite rerender bug
      this.updated = true;

      console.log('this.foo is ', this.foo);
      let fooElement = document.getElementById("foo");
      if (!fooElement) {
        console.log("Can't find foo");
      }
    }
  }

}
