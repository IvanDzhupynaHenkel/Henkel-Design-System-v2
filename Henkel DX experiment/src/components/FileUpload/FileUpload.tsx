import React, { useRef, useState } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import './FileUpload.css';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingProgress?: number;
  loadingFileName?: string;
  onFilesSelected?: (files: File[]) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  multiple = false,
  disabled = false,
  loading = false,
  loadingProgress = 0,
  loadingFileName,
  onFilesSelected,
  className = '',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files || disabled) return;
    onFilesSelected?.(Array.from(files));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const classes = [
    'file-upload',
    isDragOver && 'file-upload--drag-over',
    loading && 'file-upload--loading',
    disabled && 'file-upload--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      onClick={() => !loading && !disabled && inputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
      aria-label="File upload area"
    >
      <input
        ref={inputRef}
        type="file"
        className="file-upload__input"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="file-upload__inner">
        {loading ? (
          <>
            <div className="file-upload__spinner" aria-hidden="true" />
            {loadingFileName && (
              <div className="file-upload__progress-wrapper">
                <div className="file-upload__filename">{loadingFileName}</div>
                <ProgressBar value={loadingProgress} showLabel />
              </div>
            )}
          </>
        ) : (
          <>
            <span className="file-upload__icon" aria-hidden="true">📁</span>
            <div className="file-upload__text">
              <p className="file-upload__title">
                Drag & drop or <span>browse files</span>
              </p>
              <p className="file-upload__subtitle">
                {accept ? `Accepted formats: ${accept}` : 'All file types accepted'}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
