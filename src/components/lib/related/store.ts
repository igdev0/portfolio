import {create} from 'zustand';

interface NodeCoords {
  z: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RelatedNodePort extends NodeCoords {
  id: string;
  path: string;
}

export interface RelatedNode extends NodeCoords {
  id: string;
  ports: Set<RelatedNodePort>;
}

interface ConnectNode {
  id: string;
  port: RelatedNodePort;
}

interface RelatedStore {
  nodes: RelatedNode[];

  add(ref: RelatedNode): void;

  remove(id: string): void;

  updateCoords(id: string, data: Partial<Omit<RelatedNode, "id" | "ports">>): void;

  getNode(id: string): NodeCoords;

  connect(a: ConnectNode, b: ConnectNode): void;
}

export const useRelatedStore = create<RelatedStore>((setState, getState, store) => (
    {
      nodes: [],
      add(node) {
        setState((previousState) => {
          let nodes = previousState.nodes;
          if (previousState.nodes.some(prevNode => prevNode.id === node.id)) {
            nodes = previousState.nodes.filter(prevNode => prevNode.id !== node.id);
          }
          nodes.push(node);
          return {nodes};
        });
      },
      getNode(id: string) {
        const node = store.getState().nodes.find(node => node.id === id);
        if (!node) {
          throw new Error(`Node ${id} not found`);
        }
        return node;
      },
      updateCoords(id: string, data) {
        getState().nodes.map(node => (id === node.id ? {...node, ...data} : node));
      },
      remove(id) {
        setState((previousState) => {
          return {nodes: previousState.nodes.filter(node => node.id !== id)};
        });
      },
      connect(a, b) {
        setState((previousState) => {
          return {};
        });
      }
    }
));