import * as WoT from "wot-typescript-definitions";
import {Servient, Helpers} from "@node-wot/core";
import {HttpClientFactory} from "@node-wot/binding-http";

let servient = new Servient();
servient.addClientFactory(new HttpClientFactory(null));

let wotHelper = new Helpers(servient);

const KWHThingAddress = "http://localhost:8080/"