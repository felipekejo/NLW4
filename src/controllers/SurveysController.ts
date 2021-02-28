import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body

    const surveysRepostitory = getCustomRepository(SurveysRepository)

    const survey = surveysRepostitory.create({
      title,
      description
    })

    await surveysRepostitory.save(survey)

    return response.status(201).json(survey)
  }

  async show(request: Request, response: Response) {
    const surveysRepostitory = getCustomRepository(SurveysRepository)
    const all = await surveysRepostitory.find()
    return response.json(all)
  }

}

export { SurveysController }