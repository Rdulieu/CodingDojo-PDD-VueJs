export enum TransactionType {
  SHOPPING = 'Shopping',
  VIREMENT = 'Virement',
  SERVICE = 'Service',
}

export class Transaction {
  private constructor(
    private readonly id: string,
    private readonly description: string,
    private readonly identifier: string,
    private readonly type: TransactionType,
    private readonly accountLabel: string,
    private readonly date: Date,
    private readonly amount: number,
  ) {}

  static create(
    id: string,
    description: string,
    identifier: string,
    type: TransactionType,
    accountLabel: string,
    date: Date,
    amount: number,
  ): Transaction {
    return new Transaction(id, description, identifier, type, accountLabel, date, amount);
  }

  getId(): string {
    return this.id;
  }

  getDescription(): string {
    return this.description;
  }

  getIdentifier(): string {
    return this.identifier;
  }

  getType(): TransactionType {
    return this.type;
  }

  getAccountLabel(): string {
    return this.accountLabel;
  }

  getDate(): Date {
    return this.date;
  }

  getFormattedDate(): string {
    return this.date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  getAmount(): number {
    return this.amount;
  }

  getFormattedAmount(): string {
    const sign = this.amount >= 0 ? '+' : '';
    return `${sign}${this.amount.toLocaleString('fr-FR')}€`;
  }

  isDebit(): boolean {
    return this.amount < 0;
  }

  isCredit(): boolean {
    return this.amount > 0;
  }

  getAmountClass(): string {
    return this.amount < 0 ? 'negative' : 'positive';
  }
}
