// import { equationFabric, equationSlover } from './equation';
import express, { Request, Response, RequestHandler} from 'express';
import { limitRequest } from './limiter';
import { equationSlover } from './equation';
import { Solve } from './equation/solve';
import bodyParser from 'body-parser';

const port = 3000;
const globalLimitConn = 500;
const equationLimitConn = 5;

const app = express();

// Global limiter
app.use(limitRequest(globalLimitConn));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// Set middle limiter for Equation
app.post('/equation', limitRequest(equationLimitConn), (req: Request, res: Response): Response => {
  let a:number = 0;
  let b:number = 0;
  let c:number = 0;
  if (req.body.hasOwnProperty('a') && req.body.a !== '') a = parseFloat(req.body.a);
  if (req.body.hasOwnProperty('b') && req.body.b !== '') b = parseFloat(req.body.b);
  if (req.body.hasOwnProperty('c') && req.body.c !== '') c = parseFloat(req.body.c);

  const solve: Solve = equationSlover(a, b, c);
  console.log(solve);
  return res.json(solve);
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
