import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import Awards from './Awards';
import Actions from './Actions';
import classes from './CVForm.module.css';

const CVForm = () => {
  return (
    <section className={classes['cv-form']}>
      <GeneralInfo />
      <Education />
      <Experience />
      <Awards />
      <Actions />
    </section>
  );
};

export default CVForm;
