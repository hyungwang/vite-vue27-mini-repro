import { Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({
  stateFactory: true,
  name: "general",
  namespaced: true,
})
class GeneralModule extends VuexModule {
  pageTitle: string = "";
  counter: number = 10;
  @Mutation
  public setPageTitle(value: string) {
    this.pageTitle = value;
  }
  @Mutation
  public incrementCounter() {
    this.counter += 1;
  }
}

export default GeneralModule;
