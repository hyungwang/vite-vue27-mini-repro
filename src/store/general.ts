import { Module, VuexModule } from "vuex-module-decorators";

@Module({
  stateFactory: true,
  name: "general",
  namespaced: true
})
class GeneralModule extends VuexModule {}

export default GeneralModule;
