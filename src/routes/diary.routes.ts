import express from 'express'
import * as diaryController from '../controllers/diary'
import toNewDiaryEntry from '../validators/diary'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryController.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryController.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const adedDiaryEntry = diaryController.addDiary(newDiaryEntry)

    res.json(adedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
