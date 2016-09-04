import { createReducers, createActionCreator } from '../../genericDucks.js';

const collectionName = 'repositories';
const url = 'https://api.github.com/users/michael-martin/starred';
const dataTransform = repo => ({
  author: repo.owner.login,
  avatar: repo.owner.avatar_url,
  description: repo.description,
  id: repo.id,
  name: repo.name,
  starsCount: repo.stargazers_count,
  url: repo.html_url,
});

export const load = createActionCreator(collectionName, url);
export default createReducers(collectionName, dataTransform);
