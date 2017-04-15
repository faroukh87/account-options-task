import {Injectable} from '@angular/core';
import {Jsonp, RequestOptions} from '@angular/http';
/**
 * Created by Faroukh on 15.04.2017.
 */

@Injectable()
export default class AccountOptionsService {
    public getUrl: string = `https://accounts.gigya.com/accounts.getPolicies?userkey=AJA3Cw9XcJZf&
secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&format=jsonp&cal
lback=JSONP_CALLBACK`;
    public setUrl: string = `https://accounts.gigya.com/accounts.setPolicies?userkey=AJA3Cw9XcJZf&
secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok
5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&format=jsonp&call
back=JSONP_CALLBACK`;

    constructor(public jsonp: Jsonp) {
    }

    getAccountOptions() {
        return this.jsonp.get(this.getUrl);
    }

    setAccountOptions(formData) {
        let setUrl = this.setUrl;
        setUrl += '&accountOptions=' + encodeURIComponent(JSON.stringify(formData));
        return this.jsonp.get(setUrl);
    }
}
