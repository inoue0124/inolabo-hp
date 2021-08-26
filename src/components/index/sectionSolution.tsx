import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SolutionCard from "./solutionCard"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  title: {
    borderBottom: "solid 1px",
    paddingLeft: "100px",
    paddingRight: "20px",
  },
}))

const SectionSolution = () => {
  const classes = useStyles()

  return (
    <div id="solution" style={{ paddingTop: "60px" }}>
      <Typography align="left" variant="h4" component="h2">
        <span className={classes.title}>SOLUTION</span>
      </Typography>
      <SolutionCard
        title="WEBサービス受託開発事業"
        description="Webブラウザ向けのサービスや、
        スマホアプリの設計・開発が可能です。
        クラウドの構築やリリース後の保守までお任せ下さい。"
        imgFileName="solutionWeb.png"
        isImageLeft={false}
      />
      <SolutionCard
        title="音声ソリューション事業"
        description="最新の音声処理技術を、
        エンターテイメントや語学へと応用します。"
        imgFileName="solutionSpeech.png"
        isImageLeft={true}
      />
      <SolutionCard
        title="語学教育事業"
        description="語学SNSマッチングアプリTalkativeの運営や、
        留学経験を元にした中国語教育サービスを提供します。"
        imgFileName="solutionLanguage.png"
        isImageLeft={false}
      />
    </div>
  )
}

export default SectionSolution
