import {create} from 'zustand';

export interface RelatedNodePort {
  id: string;
  x: number; // relative
  y: number; // relative
  width: number;
  height: number;
}

export interface RelatedNode {
  id: string;
  x: number; // relative to its parent
  y: number; // relative to its parent
  z: number; // relative to its parent
  width: number;
  height: number;
  ports: Set<RelatedNodePort>;
}

interface RelatedStore {
  nodes: RelatedNode[];

  addNode(ref: RelatedNode): void;

  removeNode(id: string): void;

  connect(): void;
}

export const useRelatedStore = create<RelatedStore>((setState, getState, store) => (
    {
      nodes: [],
      addNode(node) {
        setState((previousState) => {
          return {nodes: [...previousState.nodes, node]};
        });
      },
      removeNode(id) {
        setState((previousState) => {
          return {nodes: previousState.nodes.filter(node => node.id !== id)};
        });
      },
      connect() {
      }
    }
));