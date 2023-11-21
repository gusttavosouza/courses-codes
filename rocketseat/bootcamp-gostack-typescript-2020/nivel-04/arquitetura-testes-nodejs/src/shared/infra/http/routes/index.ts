import { Router } from 'express';

import appointmentsRouter from '@modules/Appointments/infra/http/routes/appointments.routes';
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/Users/infra/http/routes/users.routes';
import passwordRouter from '@modules/Users/infra/http/routes/password.routes';
import profileRouter from '@modules/Users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
