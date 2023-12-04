import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then((saving) => {
  const data = JSON.parse(saving);
  return new GameSaving(data);
}, (error) => {
  throw error;
});
