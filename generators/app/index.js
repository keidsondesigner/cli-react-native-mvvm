import Generator from 'yeoman-generator';

export default class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente (ex: Home)',
        default: 'Home',
      }
    ]);
  }

  writing() {
    const name = this.answers.name;
    const folder = this.destinationPath(`src/screens/${name}`);

    const props = {
      name,
      lowerName: name.charAt(0).toLowerCase() + name.slice(1)
    };

    const files = ['index.tsx', 'Model.ts', 'View.tsx', 'ViewModel.ts'];
    files.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        `${folder}/${file}`,
        props
      );
    });
  }
}