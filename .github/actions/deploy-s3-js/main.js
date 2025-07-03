// to run npm init in this folder !!

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.notice('eloo from action');

  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  const s3Uri = `s3://${bucket}`;
  core.exec(`aws s3 sync ${distFolder} ${s3Uri}} --region ${bucketRegion}`);

  const webUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput('web-url', webUrl);
}

run();
