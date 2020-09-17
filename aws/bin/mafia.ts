#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MafiaStack } from '../lib/mafia-stack';

const app = new cdk.App();
new MafiaStack(app, 'MafiaStack');
