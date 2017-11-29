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