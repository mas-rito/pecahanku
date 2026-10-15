// Type definitions untuk PecahanKu game
// Semua type sesuai dengan kebutuhan desain dan implementasi

// =============================================================================
// TIPE DASAR & UTILITY
// =============================================================================

/**
 * Representasi pecahan sebagai objek dengan pembilang dan penyebut
 */
export interface Fraction {
  numerator: number;    // pembilang
  denominator: number; // penyebut (harus > 0)
}

/**
 * Representasi pecahan yang sudah disederhanakan
 */
export interface SimplifiedFraction {
  numerator: number;
  denominator: number;
}

/**
 * Model Level data dari database
 */
export interface Level {
  id: string;
  number: number;
  module: 'perkenalan' | 'bandingkan' | 'susun' | 'desimal';
  difficultyConfig: any; // Config JSON fleksibel
  progress?: LevelProgress;
}

/**
 * Progress tracking untuk level per user
 */
export interface LevelProgress {
  id: string;
  userId: string;
  levelId: string;
  completed: boolean;
  completedAt?: Date;
  // stars?: number; // Future feature
}

/**
 * User profile data
 */
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  school?: string;    // Kelas/sekolah SD (1-6)
  class?: string;     // Kelas: "1", "2", "3", "4", "5", "6"
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Data video pembelajaran
 */
export interface Video {
  id: string;
  title: string;
  description: string;
  videoId: string;           // YouTube video ID
  duration: number;          // dalam menit
  thumbnail: string;
  module: 'perkenalan' | 'bandingkan' | 'susun' | 'desimal';
}

// =============================================================================
// TIPE KOMPONEN UI
// =============================================================================

/**
 * Props untuk DraggablePiece component
 */
export interface DraggablePieceProps {
  id: string;
  value: Fraction;
  width?: number;
  height?: number;
  color?: string;
  onDrop?: (piece: { id: string; value: Fraction }, targetId: string) => void;
  onDragStart?: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Props untuk DropZone component
 */
export interface DropZoneProps {
  id: string;
  label?: string;
  targetValue?: Fraction;
  isActive?: boolean;
  isFilled?: boolean;
  onDrop?: (piece: { id: string; value: Fraction }) => void;
  className?: string;
}

/**
 * Props untuk LevelLayout component (template universal)
 */
export interface LevelLayoutProps {
  level: LevelConfig;
  userProgress?: LevelProgress;
  onLevelComplete?: (levelId: string) => void;
  className?: string;
}

/**
 * Config level dari database/LEVELS array
 */
export interface LevelConfig {
  level: number;
  module: 'perkenalan' | 'bandingkan' | 'susun' | 'desimal';
  difficultyConfig: any;
  mascot: {
    name: string;
    themeColor: string;
    greeting: string;
  };
  themeColor: string;
  targetConcept: string;
  tip: string;
  completedMessage: string;
  estimatedTime?: number;
}

/**
 * Props untuk MascotCard component
 */
export interface MascotCardProps {
  mascot: LevelConfig['mascot'];
  greeting: string;
  themeColor: string;
  className?: string;
}

/**
 * Props untuk HintBox component
 */
export interface HintBoxProps {
  type: 'tips' | 'tahukah-kamu' | 'rumus-rahasia' | 'tips-pintar';
  content: string;
  className?: string;
}

/**
 * Props untuk LevelComplete component
 */
export interface LevelCompleteProps {
  level: LevelConfig;
  onContinue?: () => void;
  onRetry?: () => void;
  className?: string;
}

/**
 * Props untuk DecimalSlider component
 */
export interface DecimalSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  targetFraction?: Fraction;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  className?: string;
}

/**
 * State untuk custom drag & drop hook
 */
export interface DragState {
  id: string | null;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

/**
 * Props untuk SortableCard component
 */
export interface SortableCardProps {
  id: string;
  label: string;
  value: Fraction;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  onSort?: (oldIndex: number, newIndex: number) => void;
  className?: string;
}

// =============================================================================
// TIPE NAVIGASI & RUTA
// =============================================================================

/**
 * Route path parameters
 */
export interface RouteParams {
  number?: string; // level number
}

/**
 * Navigation item untuk sidebar/mobile menu
 */
export interface NavItem {
  href: string;
  label: string;
  icon?: string;
  isActive?: boolean;
}

// =============================================================================
// TIPE STORE ZUSTAND
// =============================================================================

/**
 * State slice untuk UI global
 */
export interface UIState {
  isMobile: boolean;
  sidebarOpen: boolean;
  hintExpanded: boolean;
  currentHintType?: HintBoxProps['type'];
  levelCompleteModal: boolean;
  isDragging: boolean;
}

/**
 * State slice untuk game play
 */
export interface GameState {
  currentLevel: Level | null;
  userProgress: LevelProgress | null;
  dragPiece: DraggablePieceProps | null;
  dropZones: { [key: string]: DropZoneProps };\n  score: number;
  lives: number;
}

/**
 * Combined store state
 */
export interface AppState extends UIState, GameState { }

// =============================================================================
// TIPE API & SERVER ACTIONS
// =============================================================================

/**
 * Payload untuk API create progress
 */
export interface CreateProgressPayload {
  userId: string;
  levelId: string;
}

/**
 * Payload untuk update progress
 */
export interface UpdateProgressPayload {
  completed: boolean;
  completedAt?: Date;
}

/**
 * Response untuk level completion
 */
export interface LevelCompletionResponse {
  success: boolean;
  levelId: string;
  completed: boolean;
  nextLevelAvailable: boolean;
  stars?: number;
}

// =============================================================================
// TIPE UTILITY & CALLBACKS
// =============================================================================

/**
 * Callback untuk drag & drop events
 */
export type DropCallback = (sourceId: string, targetId: string, data: any) => void;

/**
 * Callback untuk level events
 */
export type LevelEventCallback = (levelId: string, event: string, data?: any) => void;

/**
 * Union type untuk event handler
 */
export type EventHandler<T = any> = (event: T) => void;