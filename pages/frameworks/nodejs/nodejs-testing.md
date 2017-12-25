# Unit tests with Mocha and Chai

## *.spec.ts example 
```ts
import { IssueTimeTracking, WorkTimeConfig } from './issueTimeTracking';
import { expect } from 'chai';
import 'mocha';

describe('Issue time tracking', () => {

  const workTimeConfig = new WorkTimeConfig(5, 8);

  /*beforeEach(() => {

  });*/

  it('original estimate 432000 sec should be 3 weeks', () => {
    let issueTimeTracking = new IssueTimeTracking(432000, 86400 , workTimeConfig);
    expect(issueTimeTracking.originalEstimateText).to.be.equal('3 weeks');
  });

  it('spent time 86400 sec should be 3 days', () => {
    let issueTimeTracking = new IssueTimeTracking(432000, 86400 , workTimeConfig);
    expect(issueTimeTracking.spentTimeText).to.be.equal('3 days');
  });

});
```

# Links

* [Setting up test coverage using Mocha, Istanbul, NYC with TypeScript](http://azimi.me/2016/09/30/nyc-mocha-typescript.1.html)
* [How to create API service tests in Node using SuperTest](https://www.uvd.co.uk/blog/how-to-create-api-service-tests-in-node-using-supertest/)
* [MAKE YOUR NODE.JS API BULLETPROOF: HOW TO TEST WITH MOCHA, CHAI, AND SUPERTEST](http://developmentnow.com/2015/02/05/make-your-node-js-api-bulletproof-how-to-test-with-mocha-chai-and-supertest/)
* [A guide to mocha's describe(), it() and setup hooks](http://samwize.com/2014/02/08/a-guide-to-mochas-describe-it-and-setup-hooks/)