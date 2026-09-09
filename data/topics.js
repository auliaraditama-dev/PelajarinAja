import { mathTopics } from "./mathTopics.js";
import { indonesianTopics, englishTopics } from "./languageTopics.js";
import { serkomTopics } from "./serkomTopics.js";
import { getCurriculumCoverage } from "./curriculumCoverage.js";

const baseTopics = [...mathTopics, ...indonesianTopics, ...englishTopics, ...serkomTopics];

export const topics = baseTopics.map((topic) => ({ ...topic, ...getCurriculumCoverage(topic.id) }));
