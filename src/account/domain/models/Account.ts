export enum AccountType {
  COURANT = 'courant',
  EPARGNE = 'epargne',
}

export class Account {
  private constructor(
    private readonly id: string,
    private readonly type: AccountType,
    private readonly label: string,
    private balance: number,
  ) {}

  static create(id: string, type: AccountType, label: string, balance: number): Account {
    if (balance < 0 && type === AccountType.EPARGNE) {
      throw new Error('Un compte épargne ne peut pas avoir un solde négatif');
    }
    return new Account(id, type, label, balance);
  }

  getId(): string {
    return this.id;
  }

  getType(): AccountType {
    return this.type;
  }

  getLabel(): string {
    return this.label;
  }

  getBalance(): number {
    return this.balance;
  }

  getFormattedBalance(): string {
    return `${this.balance.toLocaleString('fr-FR')}€`;
  }

  isCourant(): boolean {
    return this.type === AccountType.COURANT;
  }

  isEpargne(): boolean {
    return this.type === AccountType.EPARGNE;
  }

  updateBalance(newBalance: number): void {
    if (newBalance < 0 && this.type === AccountType.EPARGNE) {
      throw new Error('Un compte épargne ne peut pas avoir un solde négatif');
    }
    this.balance = newBalance;
  }
}
