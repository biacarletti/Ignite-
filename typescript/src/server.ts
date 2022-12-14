// com javascript ficava const express = require("express")
import express from 'express';
import {createCourse} from './routes'

 const app= express();

 app.get("/", createCourse );

 app.listen(3333);
 

