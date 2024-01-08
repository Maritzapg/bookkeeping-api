import express, { Request, Response } from 'express'
import { setTimeout } from 'node:timers/promises'
import { tasks } from '../utils/constants'

// Global Config
export const router = express.Router()
router.use(express.json())

type result = {
  result: string
  duration: number
  id: number
}

// GET
/**
 * Retrieve list of tasks
 * @param req The api request object
 * @param res The api response object
 * @returns The result data
 */
router.get('/tasks', async (_req: Request, res: Response) => {
  try {
    res.status(200).send(tasks)
  } catch (error) {
    res.status(404).send(`Unable to complete task due to error: ${error}`)
  }
})

// GET
/**
 * Retrieve store data by id
 * @param req The api request object
 * @param res The api response object
 * @returns The result data
 */
router.get('/tasks/:id', async (req: Request, res: Response) => {
  const taskId = req?.params?.id
  const task = tasks.filter(t => t.id === taskId)

  if (task) await setTimeout(task[0].duration)
  else res.status(404).send(`Unable to complete process, task not found`)

  try {
    res.status(200).send(tasks[0])
  } catch (error) {
    res.status(500).send(`Unable to complete task due to error: ${error}`)
  }
})
