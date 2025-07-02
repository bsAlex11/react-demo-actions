// to run npm init in this folder !!

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.notice('eloo from action');
}

run();
