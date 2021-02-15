import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DEFAULT_OBJECT_SIZE = 20;

// Ориентировочные размеры основаны на стандартном ~5" экране мобильного устройства
const GUIDELINE_BASE_WIDTH = 375;

// Коэффициент отклонения по макету
const SCREEN_DEFAULT_MAKET_WIDTH = DEFAULT_OBJECT_SIZE / GUIDELINE_BASE_WIDTH;
const SCREEN_DEFAULT_WINDOW_WIDTH = DEFAULT_OBJECT_SIZE / width;

const CHANGE_SCREEN_K_WIDTH =
  SCREEN_DEFAULT_MAKET_WIDTH > SCREEN_DEFAULT_WINDOW_WIDTH
    ? SCREEN_DEFAULT_MAKET_WIDTH - SCREEN_DEFAULT_WINDOW_WIDTH
    : SCREEN_DEFAULT_WINDOW_WIDTH - SCREEN_DEFAULT_MAKET_WIDTH;

const resizeWidth = size => {
  const Ksize = size / width; // 12%
  const Isize = size / GUIDELINE_BASE_WIDTH; // 10%
  const Lsize = Ksize > CHANGE_SCREEN_K_WIDTH ? Ksize - Isize : Isize - Ksize; // 2 %
  const l = Ksize > Lsize ? Ksize - Lsize : Ksize - Lsize; // 10%
  const newSize = width * l;

  return newSize;
};

const scale = size => resizeWidth(size);

export { scale };
