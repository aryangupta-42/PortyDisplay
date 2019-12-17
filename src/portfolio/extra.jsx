import React from 'react';
import AwardCard from './cards/mini/award.jsx';
import LanguageCard from './cards/mini/language.jsx';
import PublicationCard from './cards/mini/publication.jsx';
import SkillCard from './cards/mini/skills.jsx';
import DialogPublication from './cards/dialogPublication';
import DialogAward from './cards/dialogAward';

class Extra extends React.Component {
  constructor(props) {
    super(props);
    const {
      awards, publications, languages, skills,
    } = this.props;
    this.state = {
      openPublishDialog: false,
      openAwardDialog: false,
      userAwards: awards,
      userPublication: publications,
      userLanguages: languages,
      userSkills: skills,
      title: '',
      company: '',
      date: '',
      website: '',
      text: '',
    };
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleDialogOpen(type, chip) {
    if (type === 'publications') {
      this.setState({
        openPublishDialog: true,
        title: chip.name,
        company: chip.publisher,
        date: chip.releaseDate,
        website: chip.website,
        text: chip.summary,
      });
    } else if (type === 'awards') {
      this.setState({
        openAwardDialog: true,
        title: chip.title,
        company: chip.awarder,
        date: chip.date,
        text: chip.details,
      });
    }
  }

  handleDialogClose() {
    this.setState({
      openAwardDialog: false,
      openPublishDialog: false,
    });
  }

  render() {
    const {
      title, openPublishDialog, openAwardDialog, company, date, website, text, userAwards, userLanguages, userSkills, userPublication,
    } = this.state;
    return (
      <div className="portfolioPage extrasPage">
        <div className="portfolioPageTitle floodFill">
          Extra
          {"'"}
          s
        </div>
        <div className="portfolioFlatContainer">
          <AwardCard title="awards" items={userAwards} handleDialogOpen={this.handleDialogOpen} />
          <PublicationCard title="publications" items={userPublication} handleDialogOpen={this.handleDialogOpen} />
          <SkillCard title="skills" items={userSkills} />
          <LanguageCard title="languages" items={userLanguages} handleDialogOpen={this.handleDialogOpen} />
        </div>
        <DialogPublication
          title={title}
          handleDialogClose={this.handleDialogClose}
          open={openPublishDialog}
          publisher={company}
          date={date}
          website={website}
        >
          { text }
        </DialogPublication>
        <DialogAward
          title={title}
          handleDialogClose={this.handleDialogClose}
          open={openAwardDialog}
          awarder={company}
          date={date}
        >
          { text }
        </DialogAward>
        <div className="miniLine" />
      </div>
    );
  }
}

export default Extra;