#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { JestTestingStack } from '../lib/jest-testing-stack';

const app = new cdk.App();
new JestTestingStack(app, 'JestTestingStack');
