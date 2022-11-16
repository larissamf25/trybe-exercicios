/* eslint-disable sonarjs/no-duplicate-string */
import express, { Request, Response, Router } from 'express';
import Plants from './Plants';

const app = express();
const plantsModule = new Plants();

app.use(express.json());

const plantsRouter = Router();

const PORT = process.env.PORT || 3000;

plantsRouter.get('/plants', async (_req: Request, res: Response) => {
  const plants = await plantsModule.getPlants();
  return res.status(200).json(plants);
});

plantsRouter.get('/plant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.getPlantById(id);
  return res.status(200).json(plant);
});

plantsRouter.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.getPlantsThatNeedsSunWithId(id);
  if (!plant) return res.status(404).json({ message: 'Plant not found' });
  return res.status(200).json(plant);
});

plantsRouter.post('/plant', async (req: Request, res: Response) => {
  const { body } = req;
  const plant = await plantsModule.savePlant(body);
  return res.status(201).json(plant);
});

plantsRouter.put('/plant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const plant = await plantsModule.editPlant(id, body);
  return res.status(200).json(plant);
});

plantsRouter.delete('/plant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.removePlantById(id);
  if (!plant) return res.status(404).json({ message: 'Plant not found' });
  return res.status(204).end();
});

app.use('/plants', plantsRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

/* Crie um banco de dados para persistir os dados das plantas.
Divida a aplicação em camadas. */