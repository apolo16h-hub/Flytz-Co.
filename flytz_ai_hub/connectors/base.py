"""Connector interface — every health data source (Bevel, Apple Health, Oura, ...)
implements this so the agent doesn't care where data came from."""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field


@dataclass
class SyncResult:
    sleep_records: int = 0
    meal_records: int = 0
    metric_records: int = 0
    warnings: list[str] = field(default_factory=list)

    def total(self) -> int:
        return self.sleep_records + self.meal_records + self.metric_records


class HealthConnector(ABC):
    """A source of health data. Implementations write into the local DB via flytz_ai_hub.db."""

    name: str = "base"

    @abstractmethod
    def sync(self, path_or_config: str) -> SyncResult:
        """Pull data from the source into the local database."""
        raise NotImplementedError
