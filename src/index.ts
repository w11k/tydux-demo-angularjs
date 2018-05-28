import {View} from "@w11k/tydux";
import {toAngularJSScope} from "@w11k/tydux/dist/angularjs-integration";
import {IAngularStatic, IScope} from "angular";
import {DemoStore} from "./store";

declare const angular: IAngularStatic;
export const appModule = angular.module("TyduxDemoAngularJS", []);

appModule.service("demoStore", DemoStore);

export class DemoController {

    newEntryInput: string;

    constructor($scope: IScope,
                private readonly demoStore: DemoStore) {

        const view = new View({
            store1: demoStore,
            store2: demoStore
        });

        view.select(s => s.store1.entries)
            .bounded(toAngularJSScope($scope))
            .subscribe(entries => {
                console.log('entries', entries);
            });

    }

    addEntry() {
        this.demoStore.addEntry(this.newEntryInput);
        this.newEntryInput = "";
    }

}

appModule.component("demo", {
    controller: DemoController,
    templateUrl: "/demo.html"
});
