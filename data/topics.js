import { mathTopics } from "./mathTopics.js";
import { indonesianTopics, englishTopics } from "./languageTopics.js";
import { serkomTopics } from "./serkomTopics.js";
import { getSourceCoverage } from "./sourceCoverage.js";

const baseTopics = [...mathTopics, ...indonesianTopics, ...englishTopics, ...serkomTopics];

export const topics = baseTopics.map((topic) => ({ ...topic, ...getSourceCoverage(topic.id) }));
