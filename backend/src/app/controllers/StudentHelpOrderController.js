import * as Yup from 'yup';
import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

class StudentHelpOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    const { question } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists.' });
    }

    const helpOrder = await HelpOrder.create({
      student_id: student.id,
      question,
    });

    return res.json(helpOrder);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const helpOrder = await HelpOrder.findAll({
      where: { student_id: req.params.id },
      order: [['id', 'DESC']],
      attributes: ['id', 'question', 'answer', 'answer_at', 'created_at'],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(helpOrder);
  }
}

export default new StudentHelpOrderController();
